import TopoDesign from "./TopoDesign";
import backupPfp from "./assets/suzaizai.jpeg"
import { useUser } from "./UserContext";

export default function Topo() {
    const { user } = useUser();

    return (
        <TopoDesign>
            <div className="topo-container">
                <span>TrackIt</span>
                {user ? (
                    <img src={user.image || {backupPfp}} alt="imagem de perfil" />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </TopoDesign>
    );
}
