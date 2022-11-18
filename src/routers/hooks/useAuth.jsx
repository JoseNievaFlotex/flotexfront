import { LocalStorageService } from "../../services";   

const useAuth = () => {
    try {
        return LocalStorageService.obtenerTokenAcceso().length > 0;
    } catch (error) {
        return false;
    }
}
export default useAuth;