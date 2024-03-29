import { applyDecorators, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from '../../auth/jwt-auth.guard';

export function PrincipalGuard() {
  return applyDecorators(
    UseGuards(JWTAuthGuard),
  );
}