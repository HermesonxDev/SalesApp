import { ActivityIndicator, Modal } from 'react-native';
import { Container } from './styles';

interface LoadingProps {
  visible: boolean;
  color?: string;
  size?: 'small' | 'large';
}

const Loading: React.FC<LoadingProps> = ({ visible, color = '#4CAF50', size = 'large' }) => {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
        >
            <Container>
                <ActivityIndicator size={size} color={color} />
            </Container>
        </Modal>
    );
};

export default Loading;
