import { FlatList, View } from "react-native"
import { Actions, Container, Content, Marker, Text } from "./styles"
import { Feather } from "@expo/vector-icons"
import Button from "../Button"

interface IListProps {
    data: any[],
    onEdit(id: number, modal: string): void,
    onDelete(id: number, modal: string): void
}

const List: React.FC<IListProps> = ({ data, onEdit, onDelete }) => {
    return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Content>
                        <Marker
                            backgroundColor={!!item.active
                                ? "#4CAF50"
                                : "#F44336"
                            }
                        />
                        <Text> {item.first_name}</Text>
                        <Actions>
                            <Button
                                width="35%"
                                height="30px"
                                onPress={() => onEdit(item.id, 'edit')}
                            >
                                <Feather name="edit-3" size={18} />
                            </Button>
                            
                            <Button
                                width="35%"
                                height="30px"
                                onPress={() => onDelete(item.id, 'delete')}
                            >
                                <Feather name="trash-2" size={18}/>
                            </Button>
                        </Actions>
                    </Content>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            />
        </Container>
    )
}

export default List