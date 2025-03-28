import { useEffect, useState } from "react";
import HabitosDesign from "./HabitosDesign";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

export default function Habitos() {
    const [showForm, setShowForm] = useState(false);
    const [habits, setHabits] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false);

    const token = JSON.parse(localStorage.getItem("user"))?.token;

    const weekdays = [
        { id: 0, label: "D" },
        { id: 1, label: "S" },
        { id: 2, label: "T" },
        { id: 3, label: "Q" },
        { id: 4, label: "Q" },
        { id: 5, label: "S" },
        { id: 6, label: "S" }
    ];

    function toggleDay(dayId) {
        setSelectedDays((prev) => {
            const newSelectedDays = prev.includes(dayId) ? prev.filter((d) => d !== dayId) : [...prev, dayId];
            console.log("Updated selected days:", newSelectedDays);
            return newSelectedDays;
        });
    }

    function addHabit() {
        setShowForm(!showForm);
    }

    function SaveHabit(event){
        event.preventDefault();
        setLoading(true);
        axios
        .post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                name: name.trim(),
                days: [...new Set(selectedDays)].sort()
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        )
        .then(response => {
            console.log("Habit saved successfully:", response.data);
            setLoading(false);
            setName("");
            setSelectedDays([]); 
            setShowForm(false);
            fetchHabits(); 
        })
        .catch((error) => {
            setLoading(false);
            console.error("Error logging in:", error);
            alert("Ocorreu um erro ao entrar. Preencha suas informações novamente");
        });
    }

    function fetchHabits() {
        if (!token) {
            alert("Você precisa estar logado para acessar os hábitos.");
            return;
        }

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                setHabits(response.data);
            })
            .catch(() => alert("Erro ao carregar hábitos."));
    }

    useEffect(() => {
        fetchHabits();
    }, []);

    return (
        <HabitosDesign>
            <div className="container-geral">
                <div className="topo">
                    <span>Meus hábitos</span>
                    <button className="small" onClick={addHabit}>
                        +
                    </button>
                </div>

                {showForm && (
                <div className="form-container">
                    <form>
                        <input type="text" placeholder="nome do hábito" value={name} 
                         onChange={e => setName(e.target.value)}
                         disabled={loading}/>

                        <div className="weekdays">
                            {weekdays.map((day) => (
                                <button
                                    key={day.id}
                                    type="button"
                                    className={`weekday-button ${selectedDays.includes(day.id) ? "selected" : ""}`}
                                    onClick={() => toggleDay(day.id)}
                                    disabled={loading}
                                >
                                    {day.label}
                                </button>
                            ))}
                        </div>

                       <div className="form-buttons">
                        <button type="button" className="cancel" onClick={addHabit} disabled={loading}>Cancelar</button>
                        <button type="submit" className="save" onClick={SaveHabit}> {loading ? <ThreeDots height={10} color="#fff" /> : "Salvar"}</button>
                       </div>
                    </form>
                </div>
            )}

                <div className="habitos">
                    {habits.length === 0
                        ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                        : habits.map((habit) => {
                            console.log("Habit days:", habit.days);
                            return (
                                <div className="habitos-container" key={habit.id}>
                                    <div>{habit.name}</div>
                                    <div className="weekdays">
                                        {weekdays.map((day) => (
                                            <button
                                                key={day.id}
                                                className={`weekday-button ${
                                                    habit.days.includes(day.id) ? "selected" : ""
                                                }`}
                                                disabled
                                            >
                                                {day.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </HabitosDesign>
    );
}
