import { Content } from '@components';
import { useParams } from "react-router-dom";
import {useSurvey} from "../../hooks";
import CircularProgress from '@mui/material/CircularProgress';

export const Survey: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const idSurvey = Number(id);
    const { surv , onSubmitHandler, loading } = useSurvey(idSurvey)

    console.log(surv)


    return <>
        <div style={{
            height: "456px",
            left: 0,
            right: 0,
            zIndex: -1,
            position: "absolute",
            backgroundColor: "#E5F8F8",
        }}></div>
        <section style={{margin: "10% 20% 0px 20%"}}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '48px',
                fontFamily: 'Noto Sans',
                color: "#494E4E",
                marginBottom: "70px",
            }}>
                Bienvenido
            </h1>
            {loading ? <div style={{width: "100%",
                display: "flex",
                justifyContent: "center"
            }}><CircularProgress size={"200px"}/></div> : (
                <Content survey={surv} onSubmitHandler={onSubmitHandler}/>
            )}
        </section>
    </>
}