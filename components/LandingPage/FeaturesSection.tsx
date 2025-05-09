import { Col, Row, Space, Typography } from "antd"
import Image from "next/image"
import { useTheme } from "context/ThemeContext"

const { Title, Text } = Typography

export default function FeaturesSection() {
  const { theme } = useTheme()
  return (
    <Row gutter={[32, 32]} justify="center" style={{ marginTop: "50px" }}>
      <Col xs={24} md={12} lg={10}>
        <Title level={3}>¿Por qué usar Bidalyze?</Title>
        <Space direction="vertical" size="large" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-bar-chart-icon-dark.png" : "/assets/custom-bar-chart-icon.png"}
              alt="Análisis en Tiempo Real"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Análisis en Tiempo Real
              </Text>
              <Text style={{ display: "block" }}>Visualiza las compras al instante.</Text>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-gift-icon-dark.png" : "/assets/custom-gift-icon.png"}
              alt="Ofertas Personalizadas"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Ofertas Personalizadas
              </Text>
              <Text style={{ display: "block" }}>Ahorra tiempo y esfuerzo.</Text>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-security-icon-dark.png" : "/assets/custom-security-icon.png"}
              alt="Seguridad y Privacidad"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Seguridad y Privacidad
              </Text>
              <Text style={{ display: "block" }}>Protegemos tus datos.</Text>
            </div>
          </div>
        </Space>
      </Col>
      <Col xs={24} md={12} lg={10}>
        <Title level={3}>Lo que ofrecemos</Title>
        <Space direction="vertical" size="large" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-predictive-icon-dark.png" : "/assets/custom-predictive-icon.png"}
              alt="Análisis Predictivo"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Análisis Predictivo
              </Text>
              <Text style={{ display: "block" }}>Visualiza cuándo una empresa necesita reabastecer.</Text>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-reports-icon-dark.png" : "/assets/custom-reports-icon.png"}
              alt="Reportes Detallados"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Reportes Detallados
              </Text>
              <Text style={{ display: "block" }}>Ejemplos interactivos para mejor comprensión.</Text>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src={theme === "dark" ? "/assets/custom-alerts-icon-dark.png" : "/assets/custom-alerts-icon.png"}
              alt="Alertas de Oportunidad"
              width={32}
              height={32}
            />
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                Alertas de Oportunidad
              </Text>
              <Text style={{ display: "block" }}>Notificaciones para el momento adecuado.</Text>
            </div>
          </div>
        </Space>
      </Col>
    </Row>
  )
}
