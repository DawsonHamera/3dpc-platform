// import { IonContent, IonIcon, IonPage, useIonRouter } from "@ionic/react";
// import ShopHeader from "../ShopHeader";
// import { addCircle, analytics, bag, link, people, pricetags } from "ionicons/icons";
// import Shop from "../Shop";
// import ProductCard from "../components/ProductCard";

// const ShopOption = ({ icon, title, onClick }: { icon: string; title: string; onClick: () => void }) => {
//     return (
//         <div
//             onClick={onClick}
//             style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'var(--ion-color-primary)',
//                 color: 'white',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 margin: '10px',
//                 cursor: 'pointer',
//             }}
//         >
//             <IonIcon icon={icon} />
//             <h2>{title}</h2>
//         </div>
//     );
// }

// const ShopManagement: React.FC = () => {

//     const router = useIonRouter()
//     const { data: sections } = useGetSectionsQuery();
//     const [removeProduct] = useRemoveProductMutation();


//     return (
//         <IonPage>
//             <ShopHeader title="Admin" />
//             <IonContent className="ion-padding">
//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(2, 1fr)',
//                     gap: '5px',
//                 }}>
//                     <ShopOption
//                         icon={pricetags}
//                         title="Products"
//                         onClick={() => router.push('/shop/admin/products')}
//                     />
//                     <ShopOption
//                         icon={bag}
//                         title="Orders"
//                         onClick={() => router.push('/shop/admin/orders')}
//                     />
//                     <ShopOption
//                         icon={people}
//                         title="Customers"
//                         onClick={() => router.push('/shop/admin/users')}
//                     />
//                     <ShopOption
//                         icon={analytics}
//                         title="Analytics"
//                         onClick={() => router.push('/shop/admin/analytics')}
//                     />
//                 </div>

//                 {sections && sections.map(section => (
//                     <div key={section.id} style={{ marginTop: '30px' }}>
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
//                             <h2 style={{
//                                 fontWeight: 'bold',
//                                 fontSize: 18,
//                                 margin: '3px 0 0 0'
//                             }}>{section.label}</h2>
//                             <IonIcon icon={addCircle} size='medium' style={{ margin: 10}} onClick={() => router.push('/shop/admin/products/new/' + section.id)}/>
//                         </div>
//                         <div style={{
//                             display: 'flex',
//                             gap: '20px',
//                             overflowX: 'auto',
//                         }}
//                         >
//                             {section.products.map((product: any) => (
//                                 <ProductCard
//                                     editing={true}
//                                     size={200}
//                                     key={product.id}
//                                     product={product}
//                                     onRemoveClick={() => removeProduct(product.id)}
//                                     onEditClick={() => router.push(`/shop/admin/products/${product.id}`)}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </IonContent>
//         </IonPage>
//     );
// }

// export default ShopManagement;