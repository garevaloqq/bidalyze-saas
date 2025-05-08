import { getTranslations } from 'next-intl/server';


export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = async () => {
  const t = await getTranslations('Index',);

  return (
    <>
      {t('Index.meta_title')}
    </>
  );
};

export default IndexPage;
