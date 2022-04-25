import Container from "react-bootstrap/esm/Container";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";



export default function PageInfo() {
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    return (
        <Container fluid className={`bg-${theme.background} m-0 p-0`}>
            <Container fluid>
                <h1 className={`text-${theme.leters}`}>{t('pageinfo.titlea')}</h1>
                <Container fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title1a')}</h3>
                    <p className={`text-${theme.leters}`}>{t('pageinfo.info1a')}</p>
                </Container>
                <Container fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title2a')}</h3>
                    <p className={`text-${theme.leters}`}>{t('pageinfo.info2a')}</p>
                </Container>
                <Container  fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title3a')}</h3>
                    <p className={`text-${theme.leters}`}>{t('pageinfo.info3a')}</p>
                </Container>
                <h1 className={`text-${theme.leters}`}>{t('pageinfo.titleb')}</h1>
                <Container fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title1b')}</h3>
                    <p className={`text-${theme.leters}`}>{t('pageinfo.info1b')}</p>
                </Container>
                <Container fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title2b')}</h3>
                    <p className={`text-${theme.leters}`}>{t('pageinfo.info2b')}</p>
                </Container>
                <Container fluid>
                    <h3 className={`text-${theme.leters}`}>{t('pageinfo.title3b')}</h3>
                    <p className={`text-${theme.leters} m-0 pb-4`}>{t('pageinfo.info3b')}</p>
                </Container>
            </Container>
        </Container>
    )
}