export default class CustomPlayer{

    width: number; 
    height: number; 
    error: string;
    sources!: object;
    playerid!: string;

    constructor(width: number, height: number, error: string) {
        this.width = width;
        this.height = height;
        this.error = error;
    }

    setSources(sources: object){
        this.sources = sources;
    }

    render(playerid: string) {
        this.playerid = playerid;

        const createdSection = document.createElement("section");
        createdSection.setAttribute("id", this.playerid);
        document.body.appendChild(createdSection);

        const createdVideo = document.createElement("video");
        createdSection.appendChild(createdVideo);
        createdVideo.setAttribute("width", this.width);
        createdVideo.setAttribute("height", this.height);
        
        
        for (let key of Object.values(this.sources)){
            const createdSource = document.createElement("source");
            createdVideo.appendChild(createdSource);
            createdSource.setAttribute("src", key.src);
            createdSource.setAttribute("type", key.type);
        }

        const error = document.createTextNode(this.error);
        createdVideo.appendChild(error);

    }
}

