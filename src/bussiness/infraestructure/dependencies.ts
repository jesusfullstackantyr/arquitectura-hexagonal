import { CreateBusinessUseCase } from "../application/createBusinessUseCase";
import { DetailBusinessUseCase } from "../application/detailBusinessUseCase";
import { ListBusinessUseCase } from "../application/listBusinessUseCase";
import { RemoveBusinessUseCase } from "../application/removeBusinessUseCase";
import { CreateBusinessController } from "./controllers/createBusinessController";
import { ListBusinessController } from "./controllers/listBusinessController";
import { RemoveBusinessController } from "./controllers/removeBusinessController";
import { MysqlBusinessRepository } from "./repositories/mysqlRepository";
import { SqliteBusinessRepository } from "./repositories/sqliteRepository";
import { DetailBusinessController } from "./controllers/detailBusinessController";

//REPOSITORIES
const mysqlRepository = new MysqlBusinessRepository();
const sqliteRepository = new SqliteBusinessRepository();

const currentRepository = sqliteRepository;

// USE CASES
const listingBusinessUseCase = new ListBusinessUseCase(currentRepository);
const createBusinessUseCase = new CreateBusinessUseCase(currentRepository);
const removeBusinessUseCase = new RemoveBusinessUseCase(currentRepository);
const detailBusinessUseCase = new DetailBusinessUseCase(currentRepository);

//CONTROLLERS
export const listingBusinessController = new ListBusinessController(listingBusinessUseCase);
export const createBusinessController = new CreateBusinessController(createBusinessUseCase);
export const removeBusinessController = new RemoveBusinessController(removeBusinessUseCase);
export const detailBusinessController = new DetailBusinessController(detailBusinessUseCase);