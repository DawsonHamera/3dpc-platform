import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { chevronUpOutline, chevronDownOutline } from 'ionicons/icons';

type ColorPickerProps = {
    style?: React.CSSProperties;
    items: { id: number; color: string }[];
    selectedId?: number;
    setSelectedId?: (id: number) => void;
    onCreate?: () => void; // New prop for handling the "+" button click
};

const ColorPicker: React.FC<ColorPickerProps> = ({ style, items, selectedId, setSelectedId, onCreate }) => {
    const visibleCount = 3;

    const selectedIndex = selectedId ? items.findIndex(item => item.id === selectedId) : 0;

    const scrollUp = () => {
        if (selectedIndex > 0 && setSelectedId) {
            setSelectedId(items[selectedIndex - 1].id);
        }
    };

    const scrollDown = () => {
        if (selectedIndex < items.length - 1 && setSelectedId) {
            setSelectedId(items[selectedIndex + 1].id);
        }
    };

    // Determine which items to show (3 total, with selected in center if possible)
    const getVisibleItems = () => {
        let start = Math.max(0, selectedIndex - 1);
        let end = Math.min(items.length, start + visibleCount);

        // if we're near the end and have fewer than 3, shift start back
        if (end - start < visibleCount) {
            start = Math.max(0, end - visibleCount);
        }
        return items.slice(start, end);
    };

    const visibleItems = getVisibleItems();

    return (
        <div style={style}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 48,
                    gap: 4,
                }}
            >
                {/* Up Chevron */}
                {items.length > 0 && (
                    <div
                        style={{
                            height: 20, // Maintain space even when hidden
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {selectedIndex > 0 && (
                            <IonButton
                                onClick={scrollUp}
                                fill="clear"
                                color="dark"
                                style={{
                                    minHeight: 20,
                                    minWidth: 20,
                                    padding: 0,
                                }}
                            >
                                <IonIcon icon={chevronUpOutline} slot="icon-only" />
                            </IonButton>
                        )}
                    </div>
                )}
                {/* Circle Display */}
                {items.length > 0 && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5,
                            height: 80,
                            width: 40,
                            justifyContent: 'center',
                        }}
                    >
                        {visibleItems.map((item) => {
                            const isCenter = item.id === selectedId;
                            return (
                                <div
                                    onClick={() => setSelectedId?.(item.id)}
                                    key={item.id}
                                    style={{
                                        backgroundColor: item.color || '#0000',
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        border: isCenter ? '2px solid #000' : '1px solid #eee',
                                        boxSizing: 'border-box',
                                        flexShrink: 0,
                                        margin: '0 auto',
                                        transform: isCenter ? 'scale(1.1)' : 'scale(1)',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer',
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
                {/* "+" Circle */}
                <div
                    onClick={onCreate}
                    style={{
                        backgroundColor: '#ddd',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box',
                        flexShrink: 0,
                        margin: '8px auto 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#555',
                    }}
                >
                    +
                </div>
                {/* Down Chevron */}
                {items.length > 0 && (
                    <div
                        style={{
                            height: 20, // Maintain space even when hidden
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {selectedIndex < items.length - 1 && (
                            <IonButton
                                onClick={scrollDown}
                                fill="clear"
                                color="dark"
                                style={{
                                    minHeight: 20,
                                    minWidth: 20,
                                    padding: 0,
                                }}
                            >
                                <IonIcon icon={chevronDownOutline} slot="icon-only" />
                            </IonButton>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorPicker;
