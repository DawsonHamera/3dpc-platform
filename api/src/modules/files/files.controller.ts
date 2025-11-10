import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { File, FileType } from './entities/file.entity';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { diskStorage } from 'multer';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @Public()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // relative to backend root
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
          cb(null, `${uniqueSuffix}_${file.originalname}`);
        },
      }),
      limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
    }),
  )
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
    @CurrentUser() user?,
  ) {
    console.log('file:', file);
    // Ensure file is uploaded and all required fields are set
    // If file is missing, reject the request
    if (!file) {
      return { success: false, message: 'No file uploaded.' };
    }

    // Generate a random filename if Multer did not provide one
    const domain = process.env.DOMAIN_NAME || 'http://localhost:3000';
    const filePath = `${domain}/uploads/${file.filename}`;

    // Determine file type
    let fileType: FileType = FileType.OTHER;
    switch (file.mimetype) {
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
        fileType = FileType.IMAGE;
        break;
      case 'model/gltf-binary':
      case 'application/octet-stream':
      case 'model/stl':
        fileType = FileType.MODEL;
        break;
      case 'image/texture':
        fileType = FileType.TEXTURE;
        break;
      case 'application/pdf':
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        fileType = FileType.DOCUMENT;
        break;
      default:
        fileType = FileType.OTHER;
    }

    const fileData = {
      originalName: file.originalname,
      fileName: file.filename,
      filePath,
      fileType,
      mimeType: file.mimetype,
      fileSize: file.size,
      uploadedBy: user?.id || null,
      description: body.description || '',
    };

    return this.filesService.create(fileData);
  }

  // @Roles(['admin'])
  @Get()
  @Public()
  findAll() {
    return this.filesService.findAll();
  }

  @Roles(['admin'])
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Roles(['admin'])
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: Partial<File>) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Roles(['admin'])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
