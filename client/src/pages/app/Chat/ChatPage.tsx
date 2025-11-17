import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { useParams } from "react-router-dom";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import "./ChatPage.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { selectStreamToken, selectCurrentUser } from "../../../features/auth/authSlice";
import { arrowBackOutline, exit, exitOutline } from "ionicons/icons";
import { useGetUsersQuery } from "../../../features/users/usersApi";

const ChatPage: React.FC = () => {
  // Get route param 'id' (optional)
  const { id: routeChannelId } = useParams<{ id?: string }>();
  // Main general channel setup
  const [mainChannel, setMainChannel] = useState<any | null>(null);

  // Create chat client using hook, token, user data
  const apiToken = useSelector(selectStreamToken);
  const user = useSelector(selectCurrentUser);
  const STREAM_API_KEY = 'ad4nfgtav89e'; // Move to env! just temp fix!
  const client = useCreateChatClient({
    apiKey: STREAM_API_KEY,
    tokenOrProvider: apiToken,
    userData: { id: String(user?.id), name: user?.name ?? undefined },
  });

  useEffect(() => {
    if (!client) return;
    let isMounted = true;
    const setupChannel = async () => {
      try {
        // If route param 'id' is present, open that channel
        if (routeChannelId) {
          console.log("Opening channel from route param:", routeChannelId);
          // Expect format type:id
          const [type, id] = routeChannelId.split(":");
          let channel = null;
          if (type && id) {
            channel = client.channel(type, id);
          } else if (routeChannelId === 'main') {
            channel = client.channel('livestream', 'main');
          }
          if (channel) {
            await channel.watch();
            if (isMounted) setSelectedChannel(channel);
         }
        }
        // Otherwise, set up main channel as normal
        const channelId = 'main';
        const generalChannel = client.channel('livestream', channelId);
        await generalChannel.watch();
        if (isMounted) setMainChannel(generalChannel);
      } catch (error) {
        console.error('Failed to set up channel:', error);
      }
    };
    setupChannel();
    return () => { isMounted = false; };
  }, [client, routeChannelId]);


  const [selectedChannel, setSelectedChannel] = useState<any | null>(null);
  const [showNewChat, setShowNewChat] = useState(false);
  const [creatingDM, setCreatingDM] = useState<number | undefined>(undefined);
  const [dmLoading, setDmLoading] = useState(false);
  const { data: users = [], isLoading: usersLoading } = useGetUsersQuery();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 700 : false;

  useEffect(() => {
    console.log("Channel changed:", selectedChannel);
  }, [selectedChannel]);

  if (!client) return <IonPage><div>Loading chat client...</div></IonPage>;

  return (
    <IonPage>
      <IonContent>
      <Chat client={client} theme="messaging light">
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            height: '100%',
            width: '100vw',
            position: 'relative',
            background: '#f3f4f6',
            boxSizing: 'border-box',
          }}
        >
          {/* Channel List (SMS threads) with main channel at top */}
          {!selectedChannel && (
            <div style={{ width: isMobile ? '100%' : 340, minWidth: isMobile ? '100%' : 340, height: '100%', background: '#f8f9fa', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', borderRight: isMobile ? 'none' : '1px solid #eee', zIndex: 2 }}>
              <div style={{ padding: '16px 16px 8px', fontWeight: 600, fontSize: 20, color: '#222', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Messages</span>
                <IonButton
                  style={{}}
                  onClick={() => setShowNewChat(true)}
                >
                  New Chat
                </IonButton>
              </div>
              <div style={{ flex: 1, overflowY: 'auto', background: '#f8f9fa' }}>
                {/* Main channel at top */}
                {mainChannel && (
                  <button
                    style={{
                      width: '100%', padding: '14px 18px', border: 'none', background: '#fff', borderBottom: '1px solid #eee', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'background 0.2s', fontSize: 16,
                      opacity: 1, color: '#222', boxShadow: 'none', fontWeight: 500,
                    }}
                    onClick={() => setSelectedChannel(mainChannel)}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fde68a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, fontWeight: 700, fontSize: 18, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                      G
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 16, color: '#222', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>General</div>
                      <div style={{ fontSize: 14, color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Main public channel for everyone</div>
                    </div>
                  </button>
                )}
                {/* User's channels below */}
                <ChannelList
                  filters={{ type: 'messaging', members: { $in: [String(user?.id)] } }}
                  sort={{ last_message_at: -1 }}
                  options={{ state: true, presence: true, watch: true }}
                  Preview={(props) => {
                    const { channel } = props;
                    const otherMembers = Object.values(channel.state.members || {}).filter((m: any) => m.user.id !== String(user?.id));
                    const displayName = otherMembers.length === 1
                      ? otherMembers[0].user?.name
                      : ((channel.data as any)?.name ?? 'Group');
                    const lastMessage = channel.state.messages && channel.state.messages.length > 0 ? channel.state.messages[channel.state.messages.length - 1] : null;
                    const lastText = lastMessage ? lastMessage.text || '[Attachment]' : 'No messages yet';
                    const lastTime = lastMessage ? new Date(lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
                    return (
                      <button
                        style={{
                          width: '100%', padding: '14px 18px', border: 'none', background: '#fff', borderBottom: '1px solid #eee', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'background 0.2s', fontSize: 16,
                          opacity: 1, color: '#222', boxShadow: 'none', fontWeight: 500,
                        }}
                        onClick={() => setSelectedChannel(channel)}
                      >
                        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, fontWeight: 700, fontSize: 18, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                          {displayName?.charAt(0).toUpperCase()}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 600, fontSize: 16, color: '#222', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{displayName}</div>
                          <div style={{ fontSize: 14, color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lastText}</div>
                        </div>
                        <div style={{ marginLeft: 12, fontSize: 13, color: '#888', minWidth: 48, textAlign: 'right' }}>{lastTime}</div>
                      </button>
                    );
                  }}
                />
              </div>
            </div>
          )}
          {/* Messaging Interface */}
          {selectedChannel && (
            <div style={{ flex: 1, height: '100%', minHeight: 0, boxSizing: 'border-box', background: '#fff', borderRadius: isMobile ? '0' : '0 12px 12px 0', boxShadow: isMobile ? '0 -2px 8px rgba(0,0,0,0.04)' : '0 2px 8px rgba(0,0,0,0.04)', position: 'relative' }}>
              {/* Back button for mobile and desktop */}
                <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 10, height: 75, display: 'flex', alignItems: 'center'}}>
                  <IonButton
                    fill="clear"
                    color="dark"
                    style={{ fontWeight: 'bold' }}
                    onClick={() => setSelectedChannel(null)}
                  >
                    <IonIcon size="large" icon={exitOutline} />
                  </IonButton>
                </div>
              <Channel channel={selectedChannel}>
                <Window>
                  <ChannelHeader />
                  <MessageList />
                  <MessageInput maxRows={6}/>
                </Window>
                <Thread />
              </Channel>
            </div>
          )}
          {/* New Chat Modal/Sidebar */}
          {showNewChat && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,41,59,0.12)', zIndex: 99, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', padding: 24, minWidth: 320, maxWidth: 360 }}>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Start a New Chat</div>
                <div style={{ maxHeight: 320, overflowY: 'auto' }}>
                  {usersLoading ? (
                    <div style={{ padding: 16 }}>Loading users...</div>
                  ) : (
                    users.filter(u => u.id !== user?.id).map(u => (
                      <button
                        key={u.id}
                        style={{
                          display: 'flex', alignItems: 'center', width: '100%', padding: '12px 16px', border: 'none', background: creatingDM === u.id ? '#e0e7ff' : 'none', cursor: 'pointer', transition: 'background 0.2s', borderBottom: '1px solid #eee', fontSize: 16, color: '#333', borderRadius: 0,
                        }}
                        onClick={async () => {
                          setDmLoading(true);
                          setCreatingDM(u.id);
                          const memberIds = [String(user?.id), String(u.id)].sort();
                          const channelId = `dm_${memberIds.join('_')}`;
                          let dmChannel = client.channel('messaging', channelId, {
                            members: memberIds,
                          });
                          await dmChannel.watch();
                          setSelectedChannel(dmChannel);
                          setDmLoading(false);
                          setCreatingDM(undefined);
                          setShowNewChat(false);
                        }}
                      >
                        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, fontWeight: 700, fontSize: 18, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                          {u.name?.charAt(0).toUpperCase()}
                        </div>
                        <span>{u.name}</span>
                        {dmLoading && creatingDM === u.id && <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>Opening...</span>}
                      </button>
                    ))
                  )}
                </div>
                <button
                  style={{ marginTop: 18, fontSize: 15, background: '#f3f4f6', color: '#222', border: 'none', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontWeight: 600 }}
                  onClick={() => setShowNewChat(false)}
                >Cancel</button>
              </div>
            </div>
          )}
        </div>
      </Chat>
      </IonContent>
    </IonPage>
  );
};

export default ChatPage;
