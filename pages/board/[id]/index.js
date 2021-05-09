import { Card } from '@components/card';
import { List } from '@components/list';
import { useRouter } from 'next/router';

export default function Board() {
  const router = useRouter();
  const { id: boardId } = router.query;

  return (
    <div>
      <List>
        <List.Title>List Title</List.Title>
        <List.CardContainer>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
          <Card>
            <Card.Title>Decription title example.</Card.Title>
          </Card>
        </List.CardContainer>
      </List>
    </div>
  );
}
