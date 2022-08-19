//action types
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";

//actions creator functions
export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        payload: {
            id: newPost.id,
            title: newPost.title,
            content: newPost.content,
            img: "",
        }
    }
}

export const editPost = (id, title, content, img) => {
    return {
        type: EDIT_POST,
        payload: {
            id,
            title,
            content,
            img
        }
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: {id}
    }
}

export const addComment = (id, content) => {
    return {
        type: ADD_COMMENT,
        payload: {
            id,
            content
        }
    }
}