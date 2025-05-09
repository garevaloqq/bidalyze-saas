import { Button, Col, Row, Space, Typography } from 'antd';
import Image from 'next/image';
import { useTheme } from 'context/ThemeContext';

const { Title, Text } = Typography;

export default function HeroSection() {
    const { theme } = useTheme();
    return (
        <Row gutter={[32, 32]} align="middle" justify="center" style={{ marginBottom: '50px' }}>
            <Col xs={24} md={12} style={{ textAlign: 'left' }}>
                <Title>Anticipa las necesidades de tus clientes con Bidalyze</Title>
                <Text>Descubre qué productos están comprando las empresas y ofrece tus soluciones en el momento adecuado.</Text>
                <Space style={{ marginTop: '20px' }}>
                    <Button type="primary" size="large">Comienza Gratis</Button>
                    <Button size="large">Ver Demo</Button>
                </Space>
            </Col>
            <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                <Image src={theme === 'dark' ? '/assets/hero-graph-image-dark.png' : '/assets/hero-graph-image.png'} alt="Hero image" width={50} />
            </Col>
        </Row>
    );
}
