import { Carousel, Rate, Typography } from "antd"
import type { CarouselRef } from "antd/es/carousel"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./TestimonialsSection.module.css" // Importamos los estilos CSS

const { Title, Text } = Typography

interface Testimonial {
  text: string
  name: string
  rating: number
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const t = useTranslations("testimonial")
  const carouselRef = useRef<CarouselRef>(null)
  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <Title level={3}>{t("title")}</Title>
      <div className={styles.testimonialsContainer}>
        <Carousel autoplay dots={{ className: styles.customDots }} ref={carouselRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ padding: "20px" }}>
              <Text style={{ fontSize: "18px" }}>"{testimonial.text}"</Text>
              <div style={{ marginTop: "12px" }}>
                <Text strong>- {testimonial.name}</Text>
                <div style={{ marginTop: "8px" }}>
                  <Rate disabled defaultValue={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
