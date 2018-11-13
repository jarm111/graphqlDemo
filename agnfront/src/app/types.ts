// Tyypit jotka vastaavat serverillä olevia query tyyppejä

// tslint:disable:interface-over-type-literal
export type Message = {
    _id: string;
    msg: string;
};

export type Query = {
    info: String
    message: Message
    allMessages: [Message]
};

export type Mutation = {
    createMessage: Message
  };
