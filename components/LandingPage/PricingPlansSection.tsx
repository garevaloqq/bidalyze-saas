import { Badge, Button, Card, Col, Row, Typography } from "antd"
import { useTranslations } from "next-intl"

const { Title, Text } = Typography

interface PriceCardProps {
  title: string
  price: string
  descriptionKey: string
  label?: "bestValue" | "popular" | "recommended"
}
/* interface PricingPlansProps {
    label?: "bestValue" | "popular" | "recommended";
} */

function PriceCard({ title, price, descriptionKey, label }: PriceCardProps) {
  const t = useTranslations("pricing")

  return (
    <Card
      style={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
        position: "relative",
        border: label ? "2px solid #1A73E8" : "1px solid #ddd",
      }}
      hoverable
    >
      <Title level={4}>{title}</Title>
      <Text style={{ fontSize: "24px" }}>{price}</Text>
      <Text style={{ display: "block", marginTop: "8px" }}>{t(descriptionKey)}</Text>
      <Button type="primary" style={{ marginTop: "12px" }}>
        Get Started
      </Button>
    </Card>
  )
}

//label?: "bestValue" | "popular" | "recommended";

export default function PricingPlansSection() {
  const t = useTranslations("pricing")
  return (
    <div style={{ padding: "40px 0" }}>
      <Title level={3}>Choose Your Plan</Title>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <PriceCard title="Basic" price="$10 /month" descriptionKey="basicDescription" />
        </Col>
        <Col xs={24} md={8}>
          <Badge.Ribbon text={t("bestValue")}>
            <PriceCard
              title="Professional"
              price="$20 /month"
              descriptionKey="professionalDescription"
              label="bestValue"
            />
          </Badge.Ribbon>
        </Col>
        <Col xs={24} md={8}>
          <PriceCard title="Enterprise" price="$60 /month" descriptionKey="enterpriseDescription" />
        </Col>
      </Row>
    </div>
  )
}
