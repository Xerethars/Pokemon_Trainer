import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogPage } from "./pages/catalog/catalog.page";
import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";
import { GuardService } from "./services/guard.service";


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LandingPage,
    },
    {
        path: "trainer",
        component: TrainerPage,
        canActivate: [GuardService],
    },
    {
        path: "catalog",
        component: CatalogPage,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}