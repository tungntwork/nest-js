import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const RESPONE_MESSAGE = 'response_message';
export const ResponseMessage = (message: string) =>
    SetMetadata(RESPONE_MESSAGE, message);

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
)