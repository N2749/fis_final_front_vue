import http from "../http-common";

class CustomerDataService {
    getAll() {
        return http.get("/stations");
    }

    get(id) {
        return http.get(`/stations/${id}`);
    }

    create(data) {
        return http.post("/stations", data);
    }

    update(id, data) {
        return http.put(`/stations/${id}`, data);
    }

    delete(id) {
        return http.delete(`/stations/${id}`);
    }

    deleteAll() {
        return http.delete(`/stations`);
    }

    findStationByLocation(location) {
        return http.get(`/stations?location=${location}`);
    }
}

export default new CustomerDataService();
