import { FlatList, View } from "react-native"
import { Actions, Container, Content, Marker, Text } from "./styles"
import Button from "../Button"

interface ActionButton {
    icon: React.ReactNode,
    onPress: (item: any) => void
}

interface IListProps {
    data: any[],
    actions?: {
        option1?: ActionButton,
        option2?: ActionButton,
        option3?: ActionButton
    }
}

const List: React.FC<IListProps> = ({ data, actions }) => (
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
                    <Text> {item.first_name || item.name} </Text>
                    <Actions>
                        {actions?.option1 &&
                            <Button
                                width="30%"
                                height="30px"
                                onPress={() => actions.option1!.onPress(item)}
                            >
                                {actions.option1.icon}
                            </Button>
                        }
                        
                        {actions?.option2 &&
                            <Button
                                width="30%"
                                height="30px"
                                onPress={() => actions.option2!.onPress(item)}
                            >
                                {actions.option2.icon}
                            </Button>
                        }

                        {actions?.option3 &&
                            <Button
                                width="30%"
                                height="30px"
                                onPress={() => actions.option3!.onPress(item)}
                            >
                                {actions.option3.icon}
                            </Button>
                        }
                    </Actions>
                </Content>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
    </Container>
)

export default List