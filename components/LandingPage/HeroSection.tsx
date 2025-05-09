import { Button, Col, Grid, Image, Row, Space, Typography } from "antd"
import { useTheme } from "context/ThemeContext"
const { useBreakpoint } = Grid
const { Title, Text } = Typography

const HeroSection = () => {
  const screens = useBreakpoint()
  const { theme } = useTheme()
  return (
    <Row gutter={[32, 32]} align="middle" justify="center" style={{ marginBottom: "50px" }}>
      <Col xs={24} md={12} style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Title>Anticipa las necesidades de tus clientes con Bidalyze</Title>
        <Text>Descubre qué productos están comprando las empresas y ofrece tus soluciones en el momento adecuado.</Text>
        <Space style={{ marginTop: "20px" }}>
          <Button type="primary" size="large">
            Comienza Gratis
          </Button>
          <Button size="large">Ver Demo</Button>
        </Space>
      </Col>
      <Col xs={24} md={12} style={{ textAlign: "center" }}>
        <Image
          src={theme === "dark" ? "/assets/hero-graph-image-dark.png" : "/assets/hero-graph-image.png"}
          alt="Estadísticas de Bidalyze"
          preview={false}
          style={{ maxWidth: screens.md ? "60%" : "100%", height: "auto" }}
        />
      </Col>
    </Row>
  )
}

export default HeroSection
