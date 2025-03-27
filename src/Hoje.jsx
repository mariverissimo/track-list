import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HojeDesign from "./HojeDesign";

dayjs.locale("pt-br");

export default function Hoje() {
    const [habitos, setHabitos] = useState([]);
    const token = JSON.parse(localStorage.getItem("user"))?.token;

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado para acessar os hábitos de hoje.");
            return;
        }

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log("API Response:", response);
                console.log("Habits Data:", response.data);
                const today = dayjs().day(); 
                const todaysHabits = response.data.filter(habito =>
                    habito.days.includes(today)
                );

                setHabitos(todaysHabits);
            })
            .catch(() => alert("Erro ao pegar seus hábitos. Tente novamente."));
    }, [token]);

    return (
        <HojeDesign>
            <div className="container-geral">
                <div>
                    <span>{dayjs().format("dddd, D [de] MMMM")}</span>
                </div>

                <div className="lista-habitos">
                    {habitos.length === 0 ? (
                        <p>Você não tem hábitos para hoje.</p>
                    ) : (
                        habitos.map((habito) => (
                            <div key={habito.id} className="habito-container">
                                <p>{habito.name}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </HojeDesign>
    );
}
