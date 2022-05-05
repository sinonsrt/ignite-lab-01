import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/products.service';
import { CreateProductInput } from '../inputs/create-product-input';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  async me(@CurrentUser() user: AuthUser) {
    console.log({ user });
    return await this.customersService.getCustomerByAuthUserId(user.sub);
  }
}
