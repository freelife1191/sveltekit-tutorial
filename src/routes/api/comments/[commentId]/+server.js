import { json } from '@sveltejs/kit';
import { comments } from "$lib/comments";

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;

    const comment = comments.find((comment) => comment.id === parseInt(commentId));

    return json(comment);
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    // db에서 비즈니스 로직 수행 (db의 어떤 특정 댓글의 내용을 수정한다.)
    const findedComment = comments.find((comment) => comment.id === parseInt(commentId));
    findedComment.text = text; // 이 부분이 댓글 수정 작업

    return json(findedComment);
}

export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;

    const deleteComment = comments.find((comment) => comment.id === parseInt(commentId));
    const index = comments.find((comment) => comment.id === parseInt(commentId));

    comments.splice(index, 1); // 비즈니스 로직 (삭제)

    return json(deleteComment);
}