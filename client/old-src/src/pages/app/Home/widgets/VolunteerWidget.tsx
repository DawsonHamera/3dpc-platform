import React from "react";
import Card from "../../../../components/UI/Card/Card";
import { IonLabel, IonSpinner, IonToast, useIonRouter } from "@ionic/react";
import { useGetTasksQuery, useUpdateTaskMutation } from "../../../../features/crud/tasksApi";
import { selectCurrentUser } from "../../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Router } from "react-router";
import SmallTaskCard from "../../../../components/DataCards/SmallTaskCard";

// TODO: Replace with your actual user context / auth selector


const VolunteerWidget: React.FC = () => {
  const { data: tasks, isLoading } = useGetTasksQuery();
  const router = useIonRouter();
  // Filter tasks to show only unassigned
  const unassignedTasks = tasks?.filter(task => task.status.name == 'approved') ?? [];

  return (
    <Card title="New Tasks" subtitle="Volunteer with printing">
      <div className="volunteer-widget">

        {isLoading && <IonSpinner name="dots" />}

        {!isLoading && unassignedTasks.length === 0 && (
          <p>No tasks need volunteers right now. Check back later!</p>
        )}

        {!isLoading &&
          unassignedTasks.map(task => {
            return (
             <SmallTaskCard task={task} isButton buttonTitle="Claim" onClick={() => router.push('/dashboard/volunteer/task/' + task.id)} />
            );
          })}
      </div>
    </Card>
  );
};

export default VolunteerWidget;
