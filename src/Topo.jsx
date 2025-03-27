import TopoDesign from "./TopoDesign";
import { useUser } from "./UserContext";

export default function Topo() {
    const { user } = useUser();

    return (
        <TopoDesign>
            <div className="topo-container">
                <span>TrackIt</span>
                {user ? (
                    <img src={user.image} alt="imagem de perfil" />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </TopoDesign>
    );
}
