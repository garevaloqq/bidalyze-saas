import { Button, Col, Image, Row, Space, Typography } from 'antd';
const { Title, Text } = Typography;

const HeroSection = () => (
    <Row gutter={[32, 32]} align="middle" justify="center" style={{ marginBottom: '50px' }}>
        <Col xs={24} md={10} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Title>Anticipa las necesidades de tus clientes con Bidalyze</Title>
            <Text>Descubre qué productos están comprando las empresas y ofrece tus soluciones en el momento adecuado.</Text>
            <Space style={{ marginTop: '20px' }}>
                <Button type="primary" size="large">Comienza Gratis</Button>
                <Button size="large">Ver Demo</Button>
            </Space>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <Image
                src="/assets/hero-graph.png"
                alt="Estadísticas de Bidalyze"
                preview={false}
                style={{ maxWidth: '60%', height: 'auto' }}
            />
        </Col>
    </Row>
);

export default HeroSection;
