import Container from "react-bootstrap/esm/Container";
import { useTranslation } from "react-i18next";



export default function PageInfo() {
    const [t, i18n] = useTranslation('global');
    return (
        <Container>
            <Container>
                <h1>{t('pageinfo.titlea')}</h1>
                <Container>
                    <h3>{t('pageinfo.title1a')}</h3>
                    <p>{t('pageinfo.info1a')}</p>
                </Container>
                <Container>
                    <h3>{t('pageinfo.title2a')}</h3>
                    <p>{t('pageinfo.info2a')}</p>
                </Container>
                <Container>
                    <h3>{t('pageinfo.title3a')}</h3>
                    <p>{t('pageinfo.info3a')}</p>
                </Container>
                <h1>{t('pageinfo.titleb')}</h1>
                <Container>
                    <h3>{t('pageinfo.title1b')}</h3>
                    <p>{t('pageinfo.info1b')}</p>
                </Container>
                <Container>
                    <h3>{t('pageinfo.title2b')}</h3>
                    <p>{t('pageinfo.info2b')}</p>
                </Container>
                <Container>
                    <h3>{t('pageinfo.title3b')}</h3>
                    <p>{t('pageinfo.info3b')}</p>
                </Container>
            </Container>
            
        </Container>
    )
}