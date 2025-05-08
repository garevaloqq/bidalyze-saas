import { Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection = () => (
    <div style={{ padding: '100px 50px', background: '#001529', color: '#fff', textAlign: 'center' }}>
        <Title style={{ color: '#fff' }}>Insights Accionables & Decisiones Basadas en Datos para Mercados Cripto</Title>
        <Paragraph style={{ color: '#fff' }}>
            CryptoQuant es un proveedor líder y confiable de análisis de datos en cadena y de mercado para instituciones e inversores profesionales en criptomonedas.
        </Paragraph>
        <Button type="primary" size="large">Comenzar Gratis</Button>
    </div>
);

export default HeroSection;
