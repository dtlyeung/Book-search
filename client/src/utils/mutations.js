import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation LOGIN_USER($email: STRING!, $password: STRING!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: STRING!, $email: STRING!, $password: STRING!) {
        addUser(username: $username, email:L $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            _id
            username
            bookcount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeFriend($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;
