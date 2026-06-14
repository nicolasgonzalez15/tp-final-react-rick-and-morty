export interface CharactersAPI {
    info:    Info;
    results: CharacterResult[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface CharacterResult {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     Type;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export type Gender = "Male";

export interface Location {
    name: string;
    url:  string;
}


export type Species = "Alien" | "Cronenberg" | "Human" | "Humanoid";

export type Status = "Alive" | "Dead" | "unknown";

export type Type = "" | "Fish-Person" | "Human with antennae" | "Robot";
