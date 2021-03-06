import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GiangVienComponent } from './pages/giang-vien/giang-vien.component';
import { LichThiComponent } from './pages/lich-thi/lich-thi.component';
import { LopHocPhanComponent } from './pages/lop-hoc-phan/lop-hoc-phan.component';
import { HocPhanComponent } from './pages/hoc-phan/hoc-phan.component';
import { LopSinhVienComponent } from './pages/lop-sinh-vien/lop-sinh-vien.component';
import { DonViComponent } from './pages/don-vi/don-vi.component';
import { DeThiComponent } from './pages/de-thi/de-thi.component';
import { DuyetDeThiComponent } from './pages/duyet-de-thi/duyet-de-thi.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, data: {title: 'Home'},
  children: [
    { path: 'giangvien', component: GiangVienComponent },
    { path: 'lichthi', component: LichThiComponent },
    { path: 'lophocphan', component: LopHocPhanComponent },
    { path: 'hocphan', component: HocPhanComponent },
    { path: 'lopsinhvien', component: LopSinhVienComponent },
    { path: 'donvi', component: DonViComponent },
    { path: 'dethi', component: DeThiComponent },
    { path: 'duyetdethi', component: DuyetDeThiComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
