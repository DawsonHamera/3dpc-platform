import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonIcon,
    IonRow,
} from "@ionic/react";
import {
    cartOutline,
    cashOutline,
    checkmarkCircleOutline,
    closeCircleOutline,
    timeOutline,
    trendingUpOutline,
} from "ionicons/icons";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { OrderStatistics } from "../types";
import { formatCurrency } from "../utils";
import "./OrderStatisticsCard.css";

interface OrderStatisticsCardProps {
    statistics: OrderStatistics;
}

const OrderStatisticsCard: React.FC<OrderStatisticsCardProps> = ({
    statistics,
}) => {
    const stats = [
        {
            title: "Total",
            value: statistics.totalOrders,
            icon: cartOutline,
            color: "#3880ff",
        },
        {
            title: "Pending",
            value: statistics.pendingOrders,
            icon: timeOutline,
            color: "#ffc409",
        },
        {
            title: "Done",
            value: statistics.completedOrders,
            icon: checkmarkCircleOutline,
            color: "#2dd36f",
        },
        {
            title: "Cancelled",
            value: statistics.cancelledOrders,
            icon: closeCircleOutline,
            color: "#eb445a",
        },
    ];

    const pieData = [
        {
            name: "Completed",
            value: statistics.completedOrders,
            color: "#2dd36f",
        },
        { name: "Pending", value: statistics.pendingOrders, color: "#ffc409" },
        {
            name: "Cancelled",
            value: statistics.cancelledOrders,
            color: "#eb445a",
        },
    ].filter((item) => item.value > 0);

    const completionRate =
        statistics.totalOrders > 0
            ? (
                  (statistics.completedOrders / statistics.totalOrders) *
                  100
              ).toFixed(0)
            : 0;

    return (
        <IonCard className="compact-stats-card">
            <IonCardHeader>
                <IonCardTitle>Overview</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div className="compact-stats-layout">
                    {/* Left: Quick Stats */}
                    <div className="stats-section">
                        <IonGrid className="compact-grid">
                            <IonRow>
                                {stats.map((stat, index) => (
                                    <IonCol size="6" key={index}>
                                        <div className="compact-stat">
                                            <IonIcon
                                                icon={stat.icon}
                                                style={{ color: stat.color }}
                                                className="compact-icon"
                                            />
                                            <div className="compact-info">
                                                <div className="compact-value">
                                                    {stat.value}
                                                </div>
                                                <div className="compact-label">
                                                    {stat.title}
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                ))}
                            </IonRow>
                        </IonGrid>

                        {/* Revenue Info */}
                        <div className="revenue-section">
                            <div className="revenue-item">
                                <IonIcon
                                    icon={cashOutline}
                                    className="revenue-icon"
                                />
                                <div>
                                    <div className="revenue-label">Revenue</div>
                                    <div className="revenue-value">
                                        {formatCurrency(
                                            statistics.totalRevenue,
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="revenue-item">
                                <IonIcon
                                    icon={trendingUpOutline}
                                    className="revenue-icon"
                                />
                                <div>
                                    <div className="revenue-label">
                                        Avg Value
                                    </div>
                                    <div className="revenue-value">
                                        {formatCurrency(
                                            statistics.averageOrderValue,
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Chart */}
                    {statistics.totalOrders > 0 && (
                        <div className="chart-section">
                            <ResponsiveContainer width="100%" height={180}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={45}
                                        outerRadius={70}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="chart-center-text">
                                <div className="chart-rate">
                                    {completionRate}%
                                </div>
                                <div className="chart-rate-label">Complete</div>
                            </div>
                        </div>
                    )}
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default OrderStatisticsCard;
