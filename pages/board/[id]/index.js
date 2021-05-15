import { Card } from '@components/card';
import { List } from '@components/list';
import { useRouter } from 'next/router';

export default function Board() {
  const router = useRouter();
  const { id: boardId } = router.query;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <List>
        <List.Title>List Title</List.Title>
        <List.CardContainer listId={'list-1'}>
          {[...Array(6)].map((a, i) => (
            <Card key={i}>
              <Card.Title>Item No: {i}</Card.Title>
            </Card>
          ))}
        </List.CardContainer>
      </List>
      <div style={{ width: 50 }}></div>
      <List>
        <List.Title>List Title</List.Title>
        <List.CardContainer listId={'list-2'}>
          {[...Array(6)].map((a, i) => (
            <Card key={i}>
              <Card.Title>Item No: {i}</Card.Title>
            </Card>
          ))}
        </List.CardContainer>
      </List>
    </div>
  );
}
