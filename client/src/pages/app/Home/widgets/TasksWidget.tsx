import React, { useEffect, useState } from 'react';
import { IonLabel, useIonRouter, IonSpinner, IonText } from '@ionic/react';
import Card from '../../../../components/UI/Card/Card';
import { useGetTasksQuery } from '../../../../features/crud/tasksApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../features/auth/authSlice';
import SmallTaskCard from '../../../../components/DataCards/SmallTaskCard';
import { isToday, parseISO, format, startOfDay, compareAsc } from 'date-fns';

interface DateGroup {
  label: string;
  date: Date;
  tasks: any[]; // Replace with your actual Task type if available
}

const PrintTasksWidget: React.FC = () => {
  const { data: tasks, isLoading } = useGetTasksQuery();
  const [dateGroups, setDateGroups] = useState<DateGroup[]>([]);
  const router = useIonRouter();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!tasks || !user) return;

    const groups = new Map<string, DateGroup>();

    for (const task of tasks) {
      if (task.assignedUser?.id !== user.id || !task.scheduledDate) continue;

      const taskDate = startOfDay(parseISO(task.scheduledDate));
      const label = isToday(taskDate)
        ? 'Today'
        : format(taskDate, 'MMMM d');

      if (!groups.has(label)) {
        groups.set(label, {
          label,
          date: taskDate,
          tasks: [],
        });
      }

      groups.get(label)!.tasks.push(task);
    }

    const sorted = Array.from(groups.values()).sort((a, b) => {
      if (a.label === 'Today') return -1;
      if (b.label === 'Today') return 1;
      return compareAsc(a.date, b.date);
    });

    setDateGroups(sorted);
  }, [tasks, user]);

  return (
    <Card title="Upcoming Tasks" subtitle="Manage your tasks">
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <IonSpinner name="dots" />
        </div>
      ) : dateGroups.length === 0 ? (
        <IonText color="medium" className="ion-text-center" style={{ display: 'block', padding: '1rem' }}>
          No upcoming tasks assigned to you.
        </IonText>
      ) : (
        dateGroups.map(group => (
          <div key={group.label}>
            <div style={{ margin: '20px 0 15px' }}>
              <h2 style={{ textAlign: 'center' }}>{group.label}</h2>
              <div style={{ borderBottom: '1px solid var(--ion-color-light-shade)' }} />
            </div>
            {group.tasks.map(task => (
              <div key={task.id}>
                <SmallTaskCard
                  task={task}
                  isButton
                  buttonTitle="Start"
                  onClick={() => router.push('/dashboard/process/' + task.id)}
                />
              </div>
            ))}
          </div>
        ))
      )}
    </Card>
  );
};

export default PrintTasksWidget;
