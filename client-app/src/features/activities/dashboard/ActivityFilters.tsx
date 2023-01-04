import { observer } from 'mobx-react-lite';
import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityFilters() {
  const { activityStore: { predicate, setPredicate } } = useStore();
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item
          content='All Activites'
          active={predicate.has('all')}
          onClick={() => setPredicate('all', 'true')}
        />
        <Menu.Item
          content="I'm going"
          active={predicate.has('isGoing')}
          onClick={() => setPredicate('isGoing', 'true')}
        />
        <Menu.Item
          content="I'm hosting"
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')}
        />
      </Menu>
      <Calendar />
      <Header />
      <Calendar
        onChange={(date: any) => setPredicate('startDate', date as Date)}
      />
    </>
  )
})