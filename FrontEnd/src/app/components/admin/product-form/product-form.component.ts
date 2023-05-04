import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  private formData = new FormData();
  productForm: FormGroup;
  product: Product = new Product();
  formTitle = 'Add';
  coverImagePath;
  productId;
  files;
  categoryList: [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {

    this.productForm = this.fb.group({
      productId: 0,
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get author() {
    return this.productForm.get('author');
  }

  get category() {
    return this.productForm.get('category');
  }

  get price() {
    return this.productForm.get('price');
  }

  ngOnInit() {
    this.productService.categories$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (categoryData: []) => {
          this.categoryList = categoryData;
        }, error => {
          console.log('Error ocurred while fetching category List : ', error);
        });

    this.route.params.subscribe(
      params => {
        if (params.id) {
          this.productId = +params.id;
          this.fetchProductData();
        }
      }
    );
  }

  fetchProductData() {
    this.formTitle = 'Edit';
    this.productService.getProductById(this.productId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: Product) => {
          this.setProductFormData(result);
        }, error => {
          console.log('Error ocurred while fetching book data : ', error);
        });
  }

  onFormSubmit() {
    if (!this.productForm.valid) {
      return;
    }
    if (this.files && this.files.length > 0) {
      for (let j = 0; j < this.files.length; j++) {
        this.formData.append('file' + j, this.files[j]);
      }
    }
    this.formData.append('productFormData', JSON.stringify(this.productForm.value));

    if (this.productId) {
      this.editProductDetails();
    } else {
      this.saveProductDetails();
    }
  }

  editBookDetails() {
    this.productService.updateProductDetails(this.formData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          this.router.navigate(['/admin/books']);
        }, error => {
          console.log('Error ocurred while updating book data : ', error);
        });
  }

  saveBookDetails() {
    this.producService.addProduct(this.formData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          this.router.navigate(['/admin/products']);
        }, error => {
          this.productForm.reset();
          console.log('Error ocurred while adding product data : ', error);
        });
  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }

  setBookFormData(productFormData) {
    this.productForm.setValue({
      productId: productFormData.productId,
      name: productFormData.name,
      category: productFormData.category,
      price: productFormData.price
    });
    this.coverImagePath = '/Upload/' + productFormData.coverFileName;
  }

  uploadImage(event) {
    this.files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (myevent: ProgressEvent) => {
      this.coverImagePath = (myevent.target as FileReader).result;
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}