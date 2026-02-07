# Angular 20 – Parse Parameters from URL

This guide explains how to parse **route parameters** and **query parameters** in **Angular v20** using `ActivatedRoute`.

---

## 1. Parse Route Parameters (Path Params)

### Example URL
```
http://localhost:4200/users/15
```

### Route Configuration
```ts
// app.routes.ts
{
  path: 'users/:id',
  component: UserDetailComponent
}
```

### Component Code
```ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `<p>User ID: {{ userId }}</p>`
})
export class UserDetailComponent {
  userId!: string;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id')!;
  }
}
```

**Output**
```
User ID: 15
```

---

## 2. Parse Query Parameters

### Example URL
```
http://localhost:4200/products?category=laptop&page=2
```

### Component Code
```ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <p>Category: {{ category }}</p>
    <p>Page: {{ page }}</p>
  `
})
export class ProductComponent {
  category!: string | null;
  page!: string | null;

  constructor(private route: ActivatedRoute) {
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.page = this.route.snapshot.queryParamMap.get('page');
  }
}
```

---

## 3. Reactive Way (Recommended)

Use this approach if the URL can change without reloading the component.

### Route Parameters (Reactive)
```ts
this.route.paramMap.subscribe(params => {
  console.log(params.get('id'));
});
```

### Query Parameters (Reactive)
```ts
this.route.queryParamMap.subscribe(params => {
  console.log(params.get('category'));
  console.log(params.get('page'));
});
```

---

## 4. Parse Route Params and Query Params Together
```ts
this.route.paramMap.subscribe(params => {
  const id = params.get('id');
});

this.route.queryParamMap.subscribe(params => {
  const page = params.get('page');
});
```

---

## Summary Table

| Type | Source | Example |
|----|----|----|
| Route Param | URL path | `/users/10` |
| Query Param | Query string | `?page=2` |

---

### Teaching Notes
- Use **route params** for required identifiers (IDs).
- Use **query params** for optional data (pagination, filters).
- Prefer **reactive subscriptions** in Angular 20 applications.
