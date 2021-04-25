import { Card } from '@components/card';
import { Draggable } from '@components/draggable';
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
          <Draggable>
            {(provied) => (
              <Card
                elementRef={provied.ref}
                {...provied.draggableProps}
                id="test"
              >
                <Card.Title>Decription title example.</Card.Title>
              </Card>
            )}
          </Draggable>
          <Draggable>
            {(provied) => (
              <Card
                elementRef={provied.ref}
                {...provied.draggableProps}
                id="test"
              >
                <Card.Title>Decription title example.</Card.Title>
              </Card>
            )}
          </Draggable>
          <Draggable>
            {(provied) => (
              <Card
                elementRef={provied.ref}
                {...provied.draggableProps}
                id="test"
              >
                <Card.Title>Decription title example.</Card.Title>
              </Card>
            )}
          </Draggable>
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
