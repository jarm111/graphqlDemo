// Tyypit jotka vastaavat serverillä olevia query tyyppejä jotka on esitelty gql shmemassa (schema.js)

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
