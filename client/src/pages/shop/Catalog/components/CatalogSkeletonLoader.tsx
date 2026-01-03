import React from "react";
import { IonSkeletonText } from "@ionic/react";
import "./CatalogSkeletonLoader.css";

const CatalogSkeletonLoader: React.FC = () => {
    return (
        <>
            {[1, 2].map((sectionIndex) => (
                <div key={sectionIndex} className="skeleton-section">
                    <h2 className="section-title skeleton-title">
                        <IonSkeletonText animated style={{ width: "40%" }} />
                    </h2>
                    <div className="product-list">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="skeleton-product-card">
                                <IonSkeletonText
                                    animated
                                    className="skeleton-image"
                                />
                                <IonSkeletonText
                                    animated
                                    style={{ width: "60%" }}
                                />
                                <IonSkeletonText
                                    animated
                                    style={{ width: "40%" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default CatalogSkeletonLoader;
