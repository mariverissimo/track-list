import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import check from "./assets/check.png";
import "dayjs/locale/pt-br";
import HojeDesign from "./HojeDesign";

dayjs.locale("pt-br");

export default function Hoje() {
    const [habitos, setHabitos] = useState([]);
    const [allHabits, setAllHabits] = useState([]); // To store all habits with the days
    const token = JSON.parse(localStorage.getItem("user"))?.token;

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado para acessar os hábitos de hoje.");
            return;
        }

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log("All Habits Data:", response.data);
                setAllHabits(response.data);
            })
            .catch(() => alert("Erro ao pegar os hábitos. Tente novamente."));

    
        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log("API Response (Today's Habits):", response);
                console.log("Habits Data:", response.data);

                const today = dayjs().day();
                const todaysHabits = response.data.filter((habito) => {
                  
                    const habitDays = allHabits.find((h) => h.id === habito.id)?.days || [];
                    console.log("Checking habit days:", habitDays, "for today:", today);
                    return habitDays.includes(today); 
                });

                console.log("Todays habits:", todaysHabits);
                setHabitos(todaysHabits);
            })
            .catch(() => alert("Erro ao pegar seus hábitos de hoje. Tente novamente."));
    }, [token, allHabits]);

    const handleCheck = (habitId) => {
        axios
            .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(() => {
                
                setHabitos((prevHabitos) =>
                    prevHabitos.map((habito) =>
                        habito.id === habitId
                            ? { ...habito, done: true }
                            : habito
                    )
                );
            })
            .catch(() => alert("Erro ao marcar o hábito como feito."));
    };

   
    const handleUncheck = (habitId) => {
        axios
            .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then(() => {
                
                setHabitos((prevHabitos) =>
                    prevHabitos.map((habito) =>
                        habito.id === habitId
                            ? { ...habito, done: false }
                            : habito
                    )
                );
            })
            .catch(() => alert("Erro ao desmarcar o hábito."));
    };

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
                               <div className="info">
                                    <p>{habito.name}</p>
                                    <div className="little-text">
                                    <span>Sequência atual: {habito.currentSequence}</span>
                                    <span>Seu recorde: {habito.highestSequence}</span>
                                    </div>
                                </div>
                                <div>
                                    <button className={`check ${habito.done ? "green" : ""}`}
                                    onClick={() =>
                                        habito.done?
                                            handleUncheck(habito.id)
                                            : handleCheck(habito.id)
                                    }
                                    >
                                        <img src={check} alt="" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </HojeDesign>
    );
}
