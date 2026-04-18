import React from "react";
import { IonSkeletonText } from "@ionic/react";
import styles from "./CatalogSkeletonLoader.module.css";

const CatalogSkeletonLoader: React.FC = () => {
    return (
        <>
            {[1, 2].map((sectionIndex) => (
                <div key={sectionIndex} className={styles.skeletonSection}>
                    <h2 className={styles.skeletonTitle}>
                        <IonSkeletonText
                            animated
                            className={styles.skeletonTitleText}
                        />
                    </h2>
                    <div className={styles.skeletonProductList}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={styles.skeletonProductCard}>
                                <IonSkeletonText
                                    animated
                                    className={styles.skeletonImage}
                                />
                                <IonSkeletonText
                                    animated
                                    className={styles.skeletonLineWide}
                                />
                                <IonSkeletonText
                                    animated
                                    className={styles.skeletonLineNarrow}
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
