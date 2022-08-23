const axios = require("axios");
class SpeakersService {
  constructor({ serviceName, serviceRegistryUrl, serviceVersionIdentifier }) {
    this.serviceName = serviceName;
    this.serviceRegistryUrl = serviceRegistryUrl;
    this.serviceVersionIdentifier = serviceVersionIdentifier;
  }

  async getNames() {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/names`,
    });
  }

  async getListShort() {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/list-short`,
    });
  }

  async getList() {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/list`,
    });
  }

  async getAllArtwork() {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/artwork`,
    });
  }

  async getSpeaker(shortname) {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/speaker/${shortname}`,
    });
  }

  async getArtworkForSpeaker(shortname) {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      url: `http://${ip}:${port}/artwork/${shortname}`,
    });
  }

  async getImage(path) {
    const { ip, port } = await this.getService();

    return this.callService({
      method: "get",
      responseType: "stream",
      url: `http://${ip}:${port}/images/${path}`,
    });
  }

  async callService(requestOptions) {
    const response = await axios(requestOptions);

    return response.data;
  }

  async getService() {
    const response = await axios.get(
      `${this.serviceRegistryUrl}/find/${this.serviceName}/${this.serviceVersionIdentifier}`
    );

    return response.data;
  }
}

module.exports = SpeakersService;
