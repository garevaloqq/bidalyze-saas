import { Carousel, Rate, Typography } from 'antd';
import { useTranslations } from 'next-intl';

const { Title, Text } = Typography;

interface Testimonial {
    text: string;
    name: string;
    rating: number;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const t = useTranslations("testimonial");
    return (
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
            <Title level={3}>{t('title')}</Title>
            <Carousel autoplay dots adaptiveHeight>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ maxWidth: 600, margin: '0 auto' }}>
                        <Text style={{ fontSize: '18px' }}>"{testimonial.text}"</Text>
                        <div style={{ marginTop: '12px' }}>
                            <Text strong>- {testimonial.name}</Text>
                            <div style={{ marginTop: '8px' }}>
                                <Rate disabled defaultValue={testimonial.rating} />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
