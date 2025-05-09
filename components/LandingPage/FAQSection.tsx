"use client"

import { CaretRightOutlined } from "@ant-design/icons"
import { Collapse, Space, theme, Typography } from "antd"
import React from "react"

const { Panel } = Collapse
const { Title, Text } = Typography

const faqData = [
    {
        question: "¿Qué es Bidalyze?",
        answer:
            "Bidalyze es una plataforma que ofrece estadísticas y análisis para que las empresas puedan tomar mejores decisiones en sus ofertas y licitaciones.",
    },
    {
        question: "¿Cómo puedo registrarme?",
        answer: "Puedes registrarte haciendo clic en el botón de Sign Up y completando el formulario de registro.",
    },
    {
        question: "¿Bidalyze es gratuito?",
        answer:
            "Bidalyze ofrece un plan gratuito con funcionalidades limitadas y planes premium para características avanzadas.",
    },
    {
        question: "¿Puedo cancelar mi suscripción en cualquier momento?",
        answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario.",
    },
]

export default function FAQSection() {
    const { token } = theme.useToken()
    const panelStyle: React.CSSProperties = {
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: "1px solid #ddd",
    }
    return (
        <div style={{ padding: "40px 0" }}>
            <Title level={3}>Preguntas Frecuentes</Title>
            <Space direction="vertical" style={{ width: "100%" }}>
                {faqData.map((faq, index) => (
                    <Collapse
                        key={`collapse-${index}`}
                        accordion
                        bordered={false}
                        expandIconPosition="end"
                        size="middle"
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 180} />}
                        style={{ background: token.colorBgContainer }}
                        items={[{
                            key: `panel-${index}`,
                            label: <Title level={5} style={{ margin: 0 }}>
                                {faq.question}
                            </Title>,
                            children: <Text>{faq.answer}</Text>,
                            style: panelStyle
                        }]}
                    />
                ))}
            </Space>
        </div>
    )
}
