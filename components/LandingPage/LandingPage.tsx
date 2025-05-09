import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Col, Divider, Row, Typography } from 'antd';
import HeroSection from 'components/HeroSection';
import FeaturesSection from './FeaturesSection';

const { Title, Paragraph } = Typography;


export default function LandingPage() {
    return (
        <>
            <HeroSection />

            <Divider />

            <FeaturesSection />

            <Divider />

            {/* Testimonials Section */}
            <Carousel autoplay>
                <div>
                    <Paragraph><UserOutlined /> "Bidalyze me ha permitido anticipar las necesidades de mis clientes."</Paragraph>
                </div>
                <div>
                    <Paragraph><UserOutlined /> "Gracias a Bidalyze, aumentamos nuestras ventas un 30%."</Paragraph>
                </div>
            </Carousel>

            <Divider />

            {/* Pricing Section */}
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={6}>
                    <Card title="Básico" bordered={false}>
                        <Title level={4}>Gratis</Title>
                        <Button type="primary">Comenzar</Button>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card title="Profesional" bordered={false}>
                        <Title level={4}>$19/mes</Title>
                        <Button type="primary">Comenzar</Button>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card title="Empresarial" bordered={false}>
                        <Title level={4}>$49/mes</Title>
                        <Button type="primary">Comenzar</Button>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
