import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { file_type, Prisma } from '@prisma/client';
import { diskStorage } from 'multer';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @Roles(['admin'])
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
  upload(@UploadedFile() file: Express.Multer.File, @CurrentUser() user?) {
    console.log('file:', file);
    // Ensure file is uploaded and all required fields are set
    // If file is missing, reject the request
    if (!file) {
      return { success: false, message: 'No file uploaded.' };
    }

    // Use relative path so it works in both dev and production
    const filePath = `/api/uploads/${file.filename}`;

    // Determine file type
    let fileType: file_type = file_type.other;
    switch (file.mimetype) {
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
        fileType = file_type.image;
        break;
      case 'model/gltf-binary':
      case 'application/octet-stream':
      case 'model/stl':
        fileType = file_type.model;
        break;
      case 'image/texture':
        fileType = file_type.texture;
        break;
      case 'application/pdf':
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        fileType = file_type.document;
        break;
      default:
        fileType = file_type.other;
    }

    const fileData: Prisma.fileCreateInput = {
      original_name: file.originalname,
      stored_name: file.filename,
      mime_type: file.mimetype,
      size: file.size,
      path: filePath,
      type: fileType,
      ...(user?.id > 0 && {
        uploader: {
          connect: { id: user.id },
        },
      }),
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
